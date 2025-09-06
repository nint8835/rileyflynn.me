// Elastic Tabstops implementation, taken from https://observablehq.com/@shaunlebron/elastic-tabstops and TypeScript-ified.

function range(start: number, stop: number | undefined = undefined, step: number = 1) {
    if (stop === undefined) [start, stop] = [0, start];
    const result = [];
    for (let i = start; i < stop; i += step) {
        result.push(i);
    }
    return result;
}

function splitArray<T>(array: T[], shouldSplit: (a: T, b: T) => boolean): T[][] {
    const n = array.length;
    if (n === 0) return [];

    // get each position in the array where a split should occur
    let indexes = range(1, n).filter((i) => shouldSplit(array[i], array[i - 1]));

    // insert start/end points
    indexes = [0, ...indexes, n];

    // group elements between the indexes
    return range(0, indexes.length - 1).map((i) => array.slice(indexes[i], indexes[i + 1]));
}

// Computes the size of all elastic tabs in the given text.
function computeElasticTabs(text: string): {
    table: string[][];
    cellBlocks: { [key: string]: number };
    blockWidths: number[];
} {
    // We ignore the last cell of each line
    // since the standard says we only count cells _behind_ a tab character.
    const table = text.split('\n').map((line) => line.split('\t').slice(0, -1));

    // result objects
    const tableUnpruned = text.split('\n').map((line) => line.split('\t'));
    const cellBlocks: {
        [key: string]: number;
    } = {}; // map a cell coordinate `${row},${col}` to a block index
    const blockWidths = []; // map a block index to a width

    // cells by coordinate
    const numRows = table.length;
    const numCols = Math.max(...table.map((cells) => cells.length));
    const getCell = (r: number, c: number) => ({ r, c, text: table[r][c] });

    // for each column, we group cells into blocks
    for (const c of range(numCols)) {
        // Get every cell in this column.
        const column = range(numRows)
            .map((r) => getCell(r, c))
            .filter(({ text }) => text != null);

        // Group contiguous cells into blocks.
        const blocks = splitArray(column, (curr, prev) => curr.r !== prev.r + 1);

        // process each block
        for (const cells of blocks) {
            // compute block width
            const w = Math.max(...cells.map(({ text }) => text.length));
            // create a new index to identify this block
            const blockI = blockWidths.length;
            // associate each of our cell coordinates to this block
            for (const { r } of cells) {
                cellBlocks[`${r},${c}`] = blockI;
            }
            // store the width of the block
            blockWidths.push(w);
        }
    }

    return { table: tableUnpruned, cellBlocks, blockWidths };
}

// View the given text with the elastic tabs expanded into spaces.
export function expandElasticTabs(
    text: string,
    { blockPad = 1, minBlockWidth = 3 }: { blockPad?: number; minBlockWidth?: number } = {},
): string {
    const { table, cellBlocks, blockWidths } = computeElasticTabs(text);
    const expandCell = (r: number, c: number) => {
        const text = table[r][c];
        const i = cellBlocks[`${r},${c}`];
        const w = Math.max(minBlockWidth, blockWidths[i]);
        return text.padEnd(w);
    };
    const numRows = table.length;
    const numCols = (r: number) => table[r].length;
    const lines = range(numRows).map((r) => {
        const cells = range(numCols(r)).map((c) => expandCell(r, c));
        const pad = ' '.repeat(blockPad);
        return cells.join(pad);
    });
    return lines.join('\n');
}

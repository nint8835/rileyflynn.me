type Vouch = { url: string; vouched_at: string };
type HumanJson = { url: string; version: '0.1.1'; vouches: Vouch[] };

const VOUCHED_URLS: string[] = [
    // My other sites
    'https://bootleg.technology',
    // Friends' sites
    'https://blog.pirated.tech',
    'https://danielledonnelly.github.io/marketing-portfolio',
    'https://danielpower.ca',
    'https://ecrann.dev',
    'https://ethandenny.dev',
    'https://evaan.dev',
    'https://jackharrhy.dev',
    'https://mitchellhynes.com',
    'https://moustafaelsisy.com',
];

export function GET({}) {
    const vouchTime = new Date();
    const vouchTimeString = vouchTime.toISOString().split('T')[0];

    const humanJson: HumanJson = {
        // TODO: Can this be made non-hardcoded?
        url: 'https://rileyflynn.me',
        version: '0.1.1',
        vouches: VOUCHED_URLS.map((url) => ({
            url,
            vouched_at: vouchTimeString,
        })),
    };

    return new Response(JSON.stringify(humanJson), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
}

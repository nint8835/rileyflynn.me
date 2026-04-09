type Vouch = { url: string; vouched_at: string };
type HumanJson = { url: string; version: '0.1.1'; vouches: Vouch[] };

export function GET({}) {
    const humanJson: HumanJson = {
        url: (import.meta.env.SITE + import.meta.env.BASE_URL).replace(/\/$/, ''),
        version: '0.1.1',
        vouches: [
            {
                url: 'https://bootleg.technology',
                vouched_at: '2026-04-09',
            },
        ],
    };

    return new Response(JSON.stringify(humanJson), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
}

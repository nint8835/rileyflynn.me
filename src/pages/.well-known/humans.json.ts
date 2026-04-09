type Vouch = { url: string; vouched_at: string };
type HumansJson = { url: string; version: '0.1.1'; vouches: Vouch[] };

export function GET({}) {
    const humansJson: HumansJson = {
        url: (import.meta.env.SITE + import.meta.env.BASE_URL).replace(/\/$/, ''),
        version: '0.1.1',
        vouches: [],
    };

    return new Response(JSON.stringify(humansJson));
}

# Assignment 1 — Network Analysis

## Website
https://example.com

## Browser and Setup
- Browser: Mozilla Firefox
- Operating System: Ubuntu
- Developer Tools: Network panel
- Disable Cache: Enabled

## Observations

| Metric | Observation |
|---|---|
| Total requests | 3 |
| Total transferred | 2.36 kB |
| Total resource size | 2.54 kB |
| Page load time | 4.34 seconds |
| HTTP 3xx responses | None observed |
| HTTP 4xx responses | None observed |

## Resource Timing

| Resource | Type | Waiting Time |
|---|---|---|
| `/` | HTML document | 815 ms |
| `s.js` | JavaScript | 502 ms |
| `data:,` | Image-type resource | 0 ms |

## Slowest Resource

The HTML document (`/`) had the longest observed waiting time of
815 ms among the listed resources with measured network waiting time.

## Analysis

The browser made three requests while loading the website.
All three returned HTTP 200 OK.

The Network panel showed 2.36 kB transferred and a total resource
size of 2.54 kB. The page load time was 4.34 seconds.

The HTML document had the longest observed waiting time. The
JavaScript resource had a waiting time of 502 ms. The `data:,`
resource showed 0 ms for its recorded network timing phases.

No HTTP 3xx or 4xx responses were visible in the captured results.
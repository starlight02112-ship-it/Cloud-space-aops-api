CLOUDSCAPE + AoPS API (public topics only)
==========================================

This bundle uses the unofficial aops-js package to request public AoPS blog topics.
It does NOT store or request your AoPS username or password.

REQUIREMENT
- Node.js 18 or newer on a computer that can run a Node server.
- The HTML file can be opened separately in a browser.

START THE API SERVER
1. Unzip this bundle on a computer with Node.js installed.
2. Open a terminal in this folder.
3. Run: npm install
4. Run: npm start
5. Leave the terminal open. The server should listen on port 3000.

CONNECT FROM CLOUDSCAPE
- Open cloudscape_aops_integrated.html in your browser.
- Click the AoPS API shortcut (the shortcut opens the live API panel).
- Tap "Load AoPS topics". The default endpoint is http://localhost:3000/api/topics.

IF THE SERVER RUNS ON ANOTHER COMPUTER
- The HTML's localhost means the device displaying Cloudscape, not the computer running
  the server. Change the endpoint to http://COMPUTER-LAN-IP:3000/api/topics.
- Keep the server on a trusted private network. Do not expose this server publicly.

LIMITATIONS
- This uses an unofficial community library and may stop working if AoPS changes.
- The endpoint is for public blog topics only; it does not reproduce the full AoPS site,
  classwork, private forums, or sign-in.
- The standalone HTML cannot run Node.js packages by itself. A server must be running.
- The server is intended for local testing and has permissive CORS; do not deploy it
  to the public internet without adding appropriate security controls.

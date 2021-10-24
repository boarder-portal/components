import { Request, Response } from 'express';

export default function render(req: Request, res: Response) {
  return res.send(`
<html>
    <head>
        <title>Компоненты</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width">
        <link rel="stylesheet" href="/build/main.css">
    </head>

    <body>
        <div id="root"></div>

        <script src="/build/main.js"></script>
    </body>
</html>
    `);
}

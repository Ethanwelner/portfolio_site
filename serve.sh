#!/usr/bin/env bash
# Local preview server matching the cloud-agent setup:
# multiple PHP workers + router.php (CORS + correct font/image MIME types).
cd "$(dirname "$0")"
export PHP_CLI_SERVER_WORKERS="${PHP_CLI_SERVER_WORKERS:-8}"
PORT="${PORT:-43145}"
echo "Serving at http://127.0.0.1:${PORT}"
exec php -S "0.0.0.0:${PORT}" router.php

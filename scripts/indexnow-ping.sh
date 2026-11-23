#!/usr/bin/env bash
# Ping IndexNow after a deploy. Add or remove URLs as needed.
KEY="3b880fca31c23ab1b31d0720a1200441"
curl -sS -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "reboundcapitalgroup.com",
    "key": "3b880fca31c23ab1b31d0720a1200441",
    "keyLocation": "https://reboundcapitalgroup.com/3b880fca31c23ab1b31d0720a1200441.txt",
    "urlList": [
      "https://reboundcapitalgroup.com/",
      "https://reboundcapitalgroup.com/contact",
      "https://reboundcapitalgroup.com/map"
    ]
  }' -w "\nHTTP %{http_code}\n"

#!/bin/bash

set -euo pipefail
IFS=$'\n\t'

CURRENT_FILE="$(readlink -f "$0")"
DIR="$(cd "$(dirname "$CURRENT_FILE")" || exit; pwd -P)"

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 [www.example.com]"
  exit 1
fi

host=$1
host_regexp="^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$"
crt_file="$DIR/certs/${host}.crt"
key_file="$DIR/certs/${host}.key"
pem_file="$DIR/certs/${host}.pem"

if ! grep -qP "$host_regexp" <<< "$host"; then
  echo "Invalid host: $host is not a valid host"
  exit 2
fi

openssl req \
  -days 3650 \
  -keyout "$key_file" \
  -newkey rsa:4096 \
  -nodes \
  -subj "/C=BR/ST=SP/O=Mário Valney/CN=$host" \
  -addext "subjectAltName=DNS:$host" \
  -out "$crt_file" \
  -x509

openssl x509 \
  -in "$crt_file" \
  -out "$pem_file" \
  -outform PEM

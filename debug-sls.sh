#!/bin/bash
export AWS_ACCESS_KEY_ID=dummy
export AWS_SECRET_ACCESS_KEY=dummy
export AWS_REGION=local           # keeps Dynamoose happy
export IS_OFFLINE=true            # visible in Node

node --inspect  "node_modules/serverless/bin/serverless" "$@"
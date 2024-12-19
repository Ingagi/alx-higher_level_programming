#!/bin/bash
# Script to display the body size of a URL response in bytes
curl -sI "$1" | grep -i "Content-Length" | awk '{print $2}'


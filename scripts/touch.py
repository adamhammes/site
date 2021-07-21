#!/usr/bin/env python3
import argparse
import datetime
import pathlib


parser = argparse.ArgumentParser()
parser.add_argument("file", type=pathlib.Path)
args = parser.parse_args()

date = datetime.datetime.utcnow().isoformat() + "Z"
with open(args.file, "w+") as f:
    f.write(f'+++\ndate = "{date}"\n+++\n\n')

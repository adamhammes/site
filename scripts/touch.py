#!/usr/bin/env python3
import argparse
import datetime
import pathlib


parser = argparse.ArgumentParser()
parser.add_argument("file", type=pathlib.Path)
args = parser.parse_args()

date = datetime.datetime.now(datetime.UTC).replace(microsecond=0).isoformat()
with open(args.file, "w+") as f:
    f.write(f'+++\ndate = "{date}"\n+++\n\n')

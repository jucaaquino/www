#!/bin/sh

# compile cv
curl https://raw.githubusercontent.com/jucaaquino/cv/refs/heads/master/aquino-cv.tex \
    | pdflatex \
    -output-directory=static \
    -jobname=aquino-cv

# fetch artist statement
curl https://raw.githubusercontent.com/jucaaquino/statement/refs/heads/master/aquino-artist-statement-200.tex \
    > statement.txt

# fetch bio
curl https://raw.githubusercontent.com/jucaaquino/bio/refs/heads/master/aquino-bio-50.tex \
    > bio.txt

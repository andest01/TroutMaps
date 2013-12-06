#!/bin/bash

# For determining the proper node binary on a Mac or Linux environment
# This does not require installation of nodejs as a prerequisite

NOT_SUPPORTED='OS not supported'

# OS name
OS_MAC=mac
OS_LINUX=linux

case $(uname) in
    Darwin)
        OS=$OS_MAC;;
    Linux)
        OS=$OS_LINUX;;
    *)
        echo $NOT_SUPPORTED
        exit 1;;
esac

# OS bit value
BIT_64=''
BIT_32=32

case $(getconf LONG_BIT) in
    64)
        BIT=$BIT_64;;
    32)
        BIT=$BIT_32;;
    *)
        echo $NOT_SUPPORTED
        exit 1;;
esac

echo ../bin/$OS/node$BIT/$1
from __future__ import print_function

import sys
import os

sys.path.insert(0, os.path.abspath('..'))

from clint.arguments import Args
from clint.textui import puts, colored, indent
from pyfiglet import Figlet

# from .furnish import

args = Args()

def main():
    puts(colored.yellow('Welcome to'))
    f = Figlet(font='slant')
    puts(colored.red(f.renderText('Furnish')))
    with indent(35):
        puts(colored.white('CLI'))
    puts(colored.blue('\n\nReady to Furnish your project?'))


if __name__ == '__main__':
    main()

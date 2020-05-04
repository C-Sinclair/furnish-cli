from setuptools import setup

setup(
        name = 'furnish',
        version = '0.1.0',
        packages = ['furnish'],
        entry_points = {
            'console_scripts': [
                'furnish = furnish.__main__:main'
            ]
        })

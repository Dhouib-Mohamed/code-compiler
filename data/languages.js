export const languages = [
    {
        name:"nodejs",
        compileName:"js",
        extention: ".jsx",
        code: ([
            'console.log("Hello World from Nodejs!")',
            'console.log(require("fs").readFileSync(0).toString())'
        ].join('\n'))
    },
    {
        name:"C",
        compileName:"c",
        extention: ".c",
        code: ([
            '#include <stdio.h>',
            '#include <stdlib.h>',
            '',
            'int main(int argc, char* argv[]) {',
            '  puts("Hello World from C!");',
            '  char *buffer = NULL;',
            '  long unsigned int len;',
            '  getline(&buffer, &len, stdin);',
            '  printf("%s\ ", buffer);',
            '  free(buffer);',
            '  return 0;',
            '}'
        ].join('\n')),
    },
    {
        name:"C++",
        compileName:"cpp",
        extention: ".cpp",
        code: ([
            '#include <iostream>',
            'using namespace std;',
            '',
            'int main(int argc, char **argv) {',
            '  cout << "Hello World from C++!\ ";',
            '  string mystr;',
            '  getline(cin, mystr);',
            '  cout << mystr << "\ ";',
            '  return 0;',
            '}'
        ].join('\n'))
    },
    {
        name:"java",
        compileName:"java",
        extention: ".java",
        code: ([
            'import java.util.Scanner;',
            '',
            'class HelloWorld {',
            '  public static void main(String[] args) {',
            '    System.out.println("Hello World from Java!");',
            '    Scanner scan = new Scanner(System.in);',
            '    System.out.println(scan.nextLine());',
            '  }',
            '}'
        ].join('\n'))
    },
    {
        name:"Go",
        compileName:"go",
        extention: ".go",
        code: ([
            'package main',
        '',
        'import "fmt"','',

        'func main() {',
        '    fmt.Println("Hello World From GoLand!")',
    '    var first string' ,
    '    fmt.Scanln(&first)' ,
    '    fmt.Println(first)' ,
    '',
    '}'
        ].join('\n'))
    },
    {
        name:"C-Sharp",
        compileName:"cs",
        extention: ".cs",
        code: ([
            'using System;' ,
            'using System.Collections.Generic;' ,
            ' ' ,
            'class HelloWorld { ' ,
            '   static void Main() { ' ,
            '      string val; ' ,
            '      Console.Write("Hello World From C#!"); ' ,
            '      val = Console.ReadLine(); ' ,
            '      Console.WriteLine(val); ' ,
            '   } ' ,
            '}'
        ].join('\n'))
    },
    {
        name:"python",
        compileName:"py",
        extention: ".py",
        code: ([
            'import sys',
            '',
            'print ("Hello World from Python!")',
            'for line in sys.stdin:',
            '    print line.rstrip()'
        ].join('\n'))
    }
];
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
            '  printf("%s\\n", buffer);',
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
            '  cout << "Hello World from C++!\\n";',
            '  string mystr;',
            '  getline(cin, mystr);',
            '  cout << mystr << "\\n";',
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
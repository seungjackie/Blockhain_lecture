#include <iostream>

void testFunc1 (){
    std::cout << "testFunc1()" << std::endl;
    testFunc2();
};
void testFunc2 (){
    std::cout << "testFunc2()" << std::endl;
    testFunc3();
};
void testFunc3 (){
    std::cout << "testFunc3()" << std::endl;
}


int main(){
    testFunc1();
}
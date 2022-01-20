#include<iostream>
#include<vector>
using namespace std;

/*
__builtin_popcount() function converts a data into its binary form and counts the number of 1 in it
*/

int main(){
	
	int n=3;
	cout<<__builtin_popcount(n)<<endl; // two 1's are there in binary value of 3
	
	n=2;
	cout<<__builtin_popcount(n)<<endl; // one 1 is there in binary value of 2
	
	n=5;
	cout<<__builtin_popcount(n); // two 1 is there in binary value of 5
}

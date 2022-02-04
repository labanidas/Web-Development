#include<iostream>
using namespace std;

int horner(int x, int a[], int index){
	
	if(index==0) return a[0];
	return x*horner(x,a,index-1)+a[index];
}

int main(){
	
	int X,x;
	cout<<"Enter the highest degree of x: ";
	cin>>X;
	int a[X+1];
	cout<<"Enter coefficients of x in decreasing order of its degree separated by space: ";
	for(int i=0;i<X+1;i++) cin>>a[i];
	cout<<"Enter the value of x: ";
	cin>>x;
	cout<<"The solution using Horner's rule is: "<<horner(x,a,X);
	
}

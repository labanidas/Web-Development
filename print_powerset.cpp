#include<iostream>
#include<string.h>
using namespace std;

void powerSet( string s, int i, string curr){
	
	if(i==s.length()) {
		cout<<'{'<<curr<<'}'<<' ';
		return;
	}
	powerSet(s,i+1,curr+s[i]);
	powerSet(s, i+1, curr);
}

int main(){
	string s;
	cout<<"Enter string: ";
	cin>>s;
	string curr="";
	cout<<"The subsets of "<<s<<" is: ";
	powerSet(s, 0, curr);
	
}

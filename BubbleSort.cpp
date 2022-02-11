#include<bits/stdc++.h>
using namespace std;

int main(){
	int a[]={15,16,6,8,5};
	int n=5;
	for(int i=0;i<n-1;i++){
		
		bool flag=true;
		
		for(int j=0;j<n-1-i;j++) 
		
			if(a[j]>a[j+1])
			{
				swap(a[j],a[j+1]);
				flag=false;
			}
		if(flag) break;	
	}
	
	for(int i=0;i<n;i++) cout<<a[i]<<' ';
}

#include<bits/stdc++.h>
using namespace std;

int main(){
	int a[]={15,16,6,8,5};
	int n=5;
	
	for(int i=0;i<n;i++){
		int min=i;
		for(int j=i+1;j<n;j++){
			if(a[j]<a[min])
			swap(a[j], a[min]);
		}
		
	}
	for(int i=0;i<n;i++) cout<<a[i]<<' ';
}

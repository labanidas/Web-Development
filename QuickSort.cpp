#include<bits/stdc++.h>
#define for	for(int i=0;i<10;i++) 
using namespace std;
int partition(int a[], int L, int u){
	int l=L;	
	int p= a[l];

	while(l<u){
		while(a[l]<=p && l<10) l++;
		while (a[u]>p) u--;
		if(l<u) swap(a[l], a[u]);	//swap is a function to swap two elements taken in parameter
	}
	swap(a[L], a[u]);
	return u;
} 

void quickSort(int a[],int l, int u){
	if(l<u){
		int p = partition(a,l,u);
		quickSort(a,l,p-1);
		quickSort(a,p+1,u);
	}
}

int main(){
	int a[10];
	cout<<"Enter 10 elements :\t";
	for cin>>a[i];
	quickSort(a,0,9);
	cout<<"Elements after QuickSort operation\n";
	cout<<"---------------------------------\n";
	for cout<<a[i]<<' ';
	
}

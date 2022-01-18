import os

def recur(n):
	if n==1:
		return 1
	return (1/n)*pow(-1,n-1) + recur(n-1)

n = int(input("Enter value of n: "))
print(recur(n))



os.system("pause")
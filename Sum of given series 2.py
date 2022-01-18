import os

def factorial(n):
	if n==1:
		return 1
	return n*factorial(n-1)

def series(n):
	if n==1:
		return 1
	return (n/factorial(n))*pow(-1, n-1) + series(n-1)

n = int(input("Enter value of n: "))
print(series(n))

os.system("pause")
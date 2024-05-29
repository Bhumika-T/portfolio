#include<iostream>

using namespace std;


int main(){
int r=64;
int q=r;
int w=0;
while(q>0){
w=w+(q&1);
q=(q>>1);




}

 if(w==1){
    cout<<"true";
}
else if(w>1){
    cout<<"false";
}

    return 0;
}
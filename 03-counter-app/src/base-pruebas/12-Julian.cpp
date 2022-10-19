#include <iostream>

using namespace std;

struct Nodo{
    int dato;
    Nodo *siguiente;
};


void flavious(Nodo *&lista, int);

bool colaVacia(Nodo*);
void insertarCola(Nodo *&,Nodo *&,int n);
void eliminarDeLaCola(Nodo *&,Nodo *&,int &n);
void mostrarCola(Nodo *);
bool buscarEnCola(Nodo *,Nodo *,int n);
void menu();

Nodo *frente1=new Nodo ;
Nodo *fin1=new Nodo ;
Nodo *frente=new Nodo ;
Nodo *fin=new Nodo ;



int main(){}

void menu(){
    int opcion,dato=0;
    do{
        cout<<"\n MENU \n";
        cout<<"instertar en Cola \n";
        cout<<"eliminar Dato \n";
        cout<<"Mostrar Cola \n";
        cout<<"Buscar en Cola \n";
        cout<<"Salir \n";
        cout<<"\n Digite una opcion";
        cin>>opcion;


        switch (opcion) {
            case 1:
            cout << "Ingrese el numero";
            cin >> dato;
            insertarCola(frente, fin, dato);
            system ("pause");
            break;

            case 2:

            while(frente!= NULL){
                eliminarDeLaCola(frente,fin,dato);
            }
                if(frente!= NULL){
                    cout<<dato;
                
                }
                else{
                    cout<<dato;
                }

            system ("pause");
            break;

            case 3:
            mostrarCola(frente);
            system("pause");
            break;

            case 4:
            cout<<"Digite numero a buscar";
            cin>>dato;
            if(buscarEnCola(frente,fin,dato)){
                cout<<"Encontrado"<<endl<<endl;
            }else{
                cout<<"no encontrado"<<endl<<endl;
            }
            system("pause");
            break;

            case 5:
            cout<<"Saliendo...";
            system("pause");
            break;

            case 6:
            cout<<"ingrese una opcion valida";
            system("pause");
            break;
        }
        system("cls");

    }

    while(opcion!=5);
}

bool colaVacia(Nodo *frente){
    if(frente==NULL){
        return true;
    }else{
        return false;
    }
}

// void flavious(Nodo *&lista, int k){
//     Nodo *aux = lista;
//     Nodo *aux1 = new Nodo();
//     int i = 0, cont =0;
//     int saltos = k;
//     while (lista != NULL){
//         while (i<k){
//             if (aux->dato != 0){
//                 aux = aux->siguiente;
//                 i++;
//             }
//         }
//         if (aux->dato != 0){
//             aux->dato = 0;
//         }
//         i = 0;
//         while (aux1->siguiente != NULL) {
//             if (aux1->dato == 0){
//                 aux1 = aux1->siguiente;
//                 cont++;
//                 int dato = aux1->dato;
//             } else {
//                 aux1 = aux1->siguiente;
//             }
//         }
//         if (cont == 1){
//             cout << "El ultimo sobreviviente es: " << k;
//             break;
//         } else {
            
//         }
        
//     }
// }

void insertarCola(Nodo *&frente ,Nodo *&fin ,int n){
    Nodo *nuevo_nodo = new Nodo();
    nuevo_nodo->dato = n;
    nuevo_nodo ->siguiente = NULL;

    if(colaVacia(frente)){
        frente = nuevo_nodo;

    }else{
        fin->siguiente = nuevo_nodo;
    }
    fin=nuevo_nodo;
    
}

void eliminarDeLaCola(Nodo *&frente,Nodo *&fin,int &n){
    frente->dato=n;
    Nodo *aux=frente;
    if(frente==fin){
        frente=NULL;
        fin=NULL;
    
    }else{
        frente=frente->siguiente;
    }
    delete aux;
}

void mostrarCola(Nodo *frente){
    Nodo *aux=frente;
    while(aux != NULL){
        cout<< aux->dato;
        aux=aux->siguiente;
    }
}

bool buscarEnCola(Nodo *frente,Nodo *fin, int n){
   bool find = false;
   Nodo *aux = frente;
   while(aux!=NULL && find==false){
       if(aux->dato ==n){
           find=true;
       }else{
           aux = aux->siguiente;
       }
   }
   return find;
}

// void divideCola(Nodo *&frente1,Nodo *&frente,Nodo *&fin1,Nodo *&fin,int n){
//     bool cumple=true;
//     Nodo *aux=frente1; 

//     int cont = 0;
//     while (cont <= n && aux!= NULL ){
//         if(aux->siguiente==NULL){
//         cumple=false;
//         }else{
//         aux=aux->siguiente;
//         cont++;
//         }
//         if (cumple){ 
//             fin2=fin1;
//             frente2=aux->siguiente;
//             fin1=aux;
//             fin1->siguiente=NULL;
//         }

    
//     }




// }

// void entrada(Nodo *& carta,Nodo *& carta2,int n_cartas){


// }


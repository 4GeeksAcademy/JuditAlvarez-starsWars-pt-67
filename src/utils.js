export const getIdFromUrl= (url)=>{
    const urlSplited= url.split('/');
    const totalElements= urlSplited.lenght;
    return urlSplited [totalElements-2];
};

// convierte en array la cadena de texto que le llega como parametro
// este metodo split lo que hace es en cada una de las ubicaciones de la barra hace una
// particion para obtener cada elemento del array
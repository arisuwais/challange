function bilangan(n) {

    kotak = [];

    for (i = 3; i <= n; i++) {

        for (j = 2; j < i; j++) {


            if (i % j == 0) {

                prima = 0;

                break;

            } else {

                prima = 1;

            }

        }

        if (prima) kotak.push(i);

    }

    return kotak;


}




console.log(bilangan(10));





var bil = 100
var prima = false;


for (i = 2; i <= bil; i++) {
    if (i >= 2) {
        prima = true;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                prima = false;
            }
        }
    }
    if (prima == true) {
        console.log(" " + i + " ");
    }
}
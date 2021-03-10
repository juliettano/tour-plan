ymaps.ready(init);
        var myMap,
        myPlacemark1;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [7.882896221474225,98.39491763021141],
                zoom: 17
            });

        myPlacemark1 = new ymaps.Placemark([7.882937356237384,98.39491799311361], {
            hintContent: "Royal Phuket City Hotel",
            balloonContentHeader: "Royal Phuket City Hotel"
            });

        myMap.geoObjects.add(myPlacemark1);

        }
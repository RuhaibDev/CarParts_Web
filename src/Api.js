import img from './image.png';

const Api = [
    {
        "id": 1,
        "name": "Brake Pads",
        "model": "Toyota Corolla",
        "company": "Toyota",
        "price": 50,
        "rating": 4.5,
        "description": "High-performance brake pads for Toyota Corolla.",
        "stock": 150,
        "image": img
    },
    {
        "id": 2,
        "name": "Oil Filter",
        "model": "Toyota Corolla",
        "company": "Toyota",
        "price": 15,
        "rating": 4.0,
        "description": "Durable oil filter for Toyota Corolla engines.",
        "stock": 80,
        "image": img
    },
    {
        "id": 3,
        "name": "Air Filter",
        "model": "Toyota Corolla",
        "company": "Toyota",
        "price": 20,
        "rating": 4.3,
        "description": "High-efficiency air filter for Toyota Corolla.",
        "stock": 100,
        "image": img
    },
    {
        "id": 4,
        "name": "Spark Plug",
        "model": "Honda Civic",
        "company": "Honda",
        "price": 30,
        "rating": 4.7,
        "description": "Premium spark plug for Honda Civic.",
        "stock": 200,
        "image": img
    },
    {
        "id": 5,
        "name": "Headlight Assembly",
        "model": "Honda Civic",
        "company": "Honda",
        "price": 120,
        "rating": 4.8,
        "description": "LED headlight assembly for Honda Civic.",
        "stock": 50,
        "image": img
    },
    {
        "id": 6,
        "name": "Battery",
        "model": "Honda Civic",
        "company": "Honda",
        "price": 100,
        "rating": 4.6,
        "description": "High-capacity battery for Honda Civic.",
        "stock": 30,
        "image": img
    },
    {
        "id": 7,
        "name": "Rearview Mirror",
        "model": "Ford Mustang",
        "company": "Ford",
        "price": 35,
        "rating": 4.4,
        "description": "Adjustable rearview mirror for Ford Mustang.",
        "stock": 90,
        "image": img
    },
    {
        "id": 8,
        "name": "Fuel Pump",
        "model": "Ford Mustang",
        "company": "Ford",
        "price": 130,
        "rating": 4.7,
        "description": "Efficient fuel pump for Ford Mustang.",
        "stock": 40,
        "image": img
    },
    {
        "id": 9,
        "name": "Windshield Wipers",
        "model": "Ford Mustang",
        "company": "Ford",
        "price": 20,
        "rating": 4.1,
        "description": "Weather-resistant windshield wipers for Ford Mustang.",
        "stock": 110,
        "image": img
    },
    {
        "id": 10,
        "name": "Radiator",
        "model": "Toyota Camry",
        "company": "Toyota",
        "price": 150,
        "rating": 4.6,
        "description": "High-efficiency radiator for Toyota Camry.",
        "stock": 60,
        "image": img
    },
    {
        "id": 11,
        "name": "Timing Belt",
        "model": "Toyota Camry",
        "company": "Toyota",
        "price": 80,
        "rating": 4.3,
        "description": "Durable timing belt for Toyota Camry.",
        "stock": 70,
        "image": img
    },
    {
        "id": 12,
        "name": "AC Compressor",
        "model": "Honda Accord",
        "company": "Honda",
        "price": 200,
        "rating": 4.7,
        "description": "Powerful AC compressor for Honda Accord.",
        "stock": 25,
        "image": img
    },
    {
        "id": 13,
        "name": "Alternator",
        "model": "Honda Accord",
        "company": "Honda",
        "price": 180,
        "rating": 4.5,
        "description": "Reliable alternator for Honda Accord.",
        "stock": 45,
        "image": img
    },
    {
        "id": 14,
        "name": "Car Battery",
        "model": "Nissan Altima",
        "company": "Nissan",
        "price": 100,
        "rating": 4.4,
        "description": "Long-lasting battery for Nissan Altima.",
        "stock": 35,
        "image": img
    },
    {
        "id": 15,
        "name": "Ignition Coil",
        "model": "Nissan Altima",
        "company": "Nissan",
        "price": 70,
        "rating": 4.3,
        "description": "Efficient ignition coil for Nissan Altima.",
        "stock": 90,
        "image": img
    },
    {
        "id": 16,
        "name": "Exhaust System",
        "model": "Ford Explorer",
        "company": "Ford",
        "price": 220,
        "rating": 4.8,
        "description": "High-performance exhaust system for Ford Explorer.",
        "stock": 20,
        "image": img
    },
    {
        "id": 17,
        "name": "Fog Lights",
        "model": "Ford Explorer",
        "company": "Ford",
        "price": 60,
        "rating": 4.5,
        "description": "Bright fog lights for Ford Explorer.",
        "stock": 75,
        "image": img
    },
    {
        "id": 18,
        "name": "Shock Absorbers",
        "model": "Chevrolet Silverado",
        "company": "Chevrolet",
        "price": 150,
        "rating": 4.6,
        "description": "Durable shock absorbers for Chevrolet Silverado.",
        "stock": 40,
        "image": img
    },
    {
        "id": 19,
        "name": "Brake Calipers",
        "model": "Chevrolet Silverado",
        "company": "Chevrolet",
        "price": 95,
        "rating": 4.3,
        "description": "High-performance brake calipers for Chevrolet Silverado.",
        "stock": 30,
        "image": img
    },
    {
        "id": 20,
        "name": "Fuel Injector",
        "model": "BMW X5",
        "company": "BMW",
        "price": 190,
        "rating": 4.7,
        "description": "Precision fuel injector for BMW X5.",
        "stock": 20,
        "image": img
    },
    {
        "id": 21,
        "name": "Spark Plug",
        "model": "BMW X5",
        "company": "BMW",
        "price": 25,
        "rating": 4.8,
        "description": "Reliable spark plug for BMW X5.",
        "stock": 110,
        "image": img
    },
    {
        "id": 22,
        "name": "Tail Light",
        "model": "Mercedes-Benz C-Class",
        "company": "Mercedes-Benz",
        "price": 120,
        "rating": 4.6,
        "description": "LED tail light for Mercedes-Benz C-Class.",
        "stock": 50,
        "image": img
    },
    {
        "id": 23,
        "name": "Grille",
        "model": "Mercedes-Benz C-Class",
        "company": "Mercedes-Benz",
        "price": 180,
        "rating": 4.9,
        "description": "Elegant front grille for Mercedes-Benz C-Class.",
        "stock": 25,
        "image": img
    },
    {
        "id": 24,
        "name": "Radiator Hose",
        "model": "Hyundai Sonata",
        "company": "Hyundai",
        "price": 20,
        "rating": 4.2,
        "description": "Durable radiator hose for Hyundai Sonata.",
        "stock": 150,
        "image": img
    },
    {
        "id": 25,
        "name": "Air Conditioning Filter",
        "model": "Hyundai Sonata",
        "company": "Hyundai",
        "price": 30,
        "rating": 4.5,
        "description": "Efficient air conditioning filter for Hyundai Sonata.",
        "stock": 60,
        "image": img
    },
    // Additional items would follow this structure, up to 50 entries.
];

export default Api;

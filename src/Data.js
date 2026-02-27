const data = [
    {
        id: 1,
        actor1: "Naga Chaitanya",
        actor2: "Anupama Parameswaran",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Naga_Chaitanya_%28cropped%29.jpg/500px-Naga_Chaitanya_%28cropped%29.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/AnupamaParameswaran_%28cropped%29.jpg/500px-AnupamaParameswaran_%28cropped%29.jpg",
        movies: [
            "Premam"
        ]
    },
    {
        id: 2,
        actor1: "Vijay Deverakonda",
        actor2: "Samantha Ruth Prabhu",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vijay_Deverakonda_at_NOTA_pressmeet_2_%28cropped%29.jpg/500px-Vijay_Deverakonda_at_NOTA_pressmeet_2_%28cropped%29.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Samantha_at_Kushi_Musical_concert_%282%29_%28cropped%29.jpg/500px-Samantha_at_Kushi_Musical_concert_%282%29_%28cropped%29.jpg",
        movies: [
            "kushi",
            "Mahanati"
        ]
    },
    {
        id: 3,
        actor1: "Naga Chaitanya",
        actor2: "Lavanya Tripathi",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Naga_Chaitanya_%28cropped%29.jpg/500px-Naga_Chaitanya_%28cropped%29.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Lavanya_tripati_from_the_sets_of_mister.png/500px-Lavanya_tripati_from_the_sets_of_mister.png",
        movies: [
            "Manam",
            "Yuddham Sharanam"
        ]
    },
    {
        id: 4,
        actor1: "Nagarjuna",
        actor2: "Raashii Khanna",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Nagarjuna_Akkineni_at_ANR_Awards.jpg/500px-Nagarjuna_Akkineni_at_ANR_Awards.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Raashi_Khanna_at_the_premiere_of_film_12th_Fail_%28cropped%29.jpg",
        movies: [
            "Manam"
        ]
    },
    {
        id: 5,
        actor1: "Naga Chaitanya",
        actor2: "Raashii Khanna",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Naga_Chaitanya_%28cropped%29.jpg/500px-Naga_Chaitanya_%28cropped%29.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Raashi_Khanna_at_the_premiere_of_film_12th_Fail_%28cropped%29.jpg",
        movies: [
            "Manam",
            "venky mama",
            "Thank you"
        ]
    },
    {
        id: 6,
        actor1: "Allu Arjun",
        actor2: "Aushka Shetty",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg/500px-Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Anushka_at_the_trailer_launch_of_Baahubali_%28cropped%29.jpg",
        movies: [
            "vedam",
            "Rudramadevi"
        ]
    },
    {
        id: 7,
        actor1: "Prabhas",
        actor2: "Charmi Kaur",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Prabhas_by_Gage_Skidmore.jpg/500px-Prabhas_by_Gage_Skidmore.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Charmi_Kaur_CCL_updates.jpg/500px-Charmi_Kaur_CCL_updates.jpg",
        movies: [
            "Pournami",
            "chakram"
        ]
    },
    {
        id: 9,
        actor1: "Allu Arjun",
        actor2: "Shruthi Hassan",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg/500px-Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Shruti_Haasan_at_the_special_screening_of_the_short_film_Devi_%2832%29.jpg",
        movies: [
            "Yevadu",
            "race gurram"
        ]
    },
    {
        id: 10,
        actor1: "Allu Arjun",
        actor2: "Kajal Aggarwal",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg/500px-Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kajal_Aggarwal_at_Bhagavanth_Kesari_Trailer_Launch_%281%29.jpg/500px-Kajal_Aggarwal_at_Bhagavanth_Kesari_Trailer_Launch_%281%29.jpg",
        movies: [
            "Arya 2",
            "yevadu"
        ]
    },
    {
        id: 11,
        actor1: "NTR",
        actor2: "Raashi Khanna",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/N._T._Rama_Rao_Jr._in_2021.jpg/500px-N._T._Rama_Rao_Jr._in_2021.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Raashi_Khanna_at_the_premiere_of_film_12th_Fail_%28cropped%29.jpg",
        movies: [
            "jai lava kusha"
        ]
    },
    {
        id: 12,
        actor1: "NTR",
        actor2: "Samantha Ruth Prabhu",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/N._T._Rama_Rao_Jr._in_2021.jpg/500px-N._T._Rama_Rao_Jr._in_2021.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Samantha_at_Kushi_Musical_concert_%282%29_%28cropped%29.jpg/500px-Samantha_at_Kushi_Musical_concert_%282%29_%28cropped%29.jpg",
        movies: [
            "Ramayya Vastavayya",
            "Brindavanam",
            "janatha garage",
            "Rabhasa"
        ]
    },
    {
        id: 13,
        actor1: "Vijay Deverakonda",
        actor2: "Keerthi Suresh",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vijay_Deverakonda_at_NOTA_pressmeet_2_%28cropped%29.jpg/500px-Vijay_Deverakonda_at_NOTA_pressmeet_2_%28cropped%29.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Keerthy_Suresh_at_Mahanati_Success_Meet_image_2.png/500px-Keerthy_Suresh_at_Mahanati_Success_Meet_image_2.png",
        movies: [
            "Mahanati"
        ]
    },
    {
        id: 14,
        actor1: "Vijay Deverakonda",
        actor2: "Ritu Varma",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vijay_Deverakonda_at_NOTA_pressmeet_2_%28cropped%29.jpg/500px-Vijay_Deverakonda_at_NOTA_pressmeet_2_%28cropped%29.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ritu_Varma_%28cropped%29.jpg/500px-Ritu_Varma_%28cropped%29.jpg",
        movies: [
            "Pelli Choopulu",
            "Yevade subramanyam"
        ]
    },
    {
        id: 15,
        actor1: "Nani",
        actor2: "Ritu Varma",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Nani_at_an_interview_for_film_companion_%28cropped%29.png/500px-Nani_at_an_interview_for_film_companion_%28cropped%29.png",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ritu_Varma_%28cropped%29.jpg/500px-Ritu_Varma_%28cropped%29.jpg",
        movies: [
            "Tuck Jagadish",
            "Yevade subramanyam"
        ]
    }
]

export default data;
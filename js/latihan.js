document.querySelectorAll('.materi-list').forEach(function(soal, index) {
    const buttons = soal.querySelectorAll('.btn-answer');
    const jawaban = soal.querySelector('.jawaban');
    const penjelasan = soal.querySelector('.penjelasan');
    const materi = soal.querySelector('.materi');
    const kunciJawaban = [
        'C. 6', 
        'B. {3, 4}',
        'B. {2}',
        'A. {1, 5, 7}',
        'D. 8'
    ];
    const penjelasanText = [
        'Penjelasan: Bilangan prima kurang dari 15 adalah 2, 3, 5, 7, 11, dan 13. Jadi, banyak anggota himpunan P adalah 6.',
        'Penjelasan: Irisan A dan B (A ∩ B) adalah himpunan yang berisi elemen-elemen yang ada di kedua himpunan. Elemen yang sama pada A dan B adalah 3 dan 4, sehingga A ∩ B = {3, 4}.',
        'Penjelasan: Bilangan genap kurang dari 15 = {2, 4, 6, 8, 10, 12, 14} & Bilangan prima = {2, 3, 5, 7, 11, 13}. Irisannya hanya 2.',
        'Penjelasan: A ∪ B = {2, 3, 4, 6, 8, 9}, Komplemen terhadap U → {1, 5, 7}',
        'Penjelasan: Himpunan kuasa P(B) adalah himpunan dari semua subset himpunan B. Jika B = {a, b, c}, maka subsetnya adalah {}, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, dan {a, b, c}. Jadi, ada 8 subset, sehingga banyak elemen pada himpunan kuasa P(B) adalah 8.'
    ];

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            jawaban.classList.remove('benar','salah');
            buttons.forEach(function(button) {
                button.classList.remove('correct', 'wrong');
            });

        if (btn.textContent.trim() === kunciJawaban[index]) {
            if (materi) {
                materi.classList.add('hidden');
                materi.textContent = '';
            } 

            jawaban.classList.add('benar');
            jawaban.textContent = 'Jawaban Benar!';
            penjelasan.innerHTML = penjelasanText[index];
            penjelasan.classList.remove('hidden');
            btn.classList.add('correct')
        } else {
            if (materi) {
                materi.classList.remove('hidden');
                materi.textContent = '--> Pelajari materi disini <--';
            }

            jawaban.classList.add('salah');
            jawaban.textContent = 'Jawaban Salah. Coba Lagi!';
            penjelasan.classList.add('hidden');
            penjelasan.textContent = '';
            btn.classList.add('wrong');
        }
    });
});
});

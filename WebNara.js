const tombol1 = document.getElementById('tombol1');
const tombol2 = document.getElementById('tombol2');
const tombol3 = document.getElementById('tombol3');
const tombol4 = document.getElementById('tombol4');
const tombol5 = document.getElementById('tombol5');
const tombol6 = document.getElementById('tombol6');
const konten1 = document.getElementById('konten1');
const konten2 = document.getElementById('konten2');
const konten3 = document.getElementById('konten3');
const konten4 = document.getElementById('konten4');
const konten5 = document.getElementById('konten5');
const konten6 = document.getElementById('konten6');
tombol1.addEventListener('click', () => {
konten1.style.display = 'block';
konten2.style.display = 'none';
konten3.style.display = 'none';
konten4.style.display = 'none';
konten5.style.display = 'none';
konten6.style.display = 'none';
});
tombol2.addEventListener('click', () => {
konten1.style.display = 'none';
konten2.style.display = 'block';
konten3.style.display = 'none';
konten4.style.display = 'none';
konten5.style.display = 'none';
konten6.style.display = 'none';
});
tombol3.addEventListener('click', () => {
konten1.style.display = 'none';
konten2.style.display = 'none';
konten3.style.display = 'block';
konten4.style.display = 'none';
konten5.style.display = 'none';
konten6.style.display = 'none';
});
tombol4.addEventListener('click', () => {
konten1.style.display = 'none';
konten2.style.display = 'none';
konten3.style.display = 'none';
konten4.style.display = 'block';
konten5.style.display = 'none';
konten6.style.display = 'none';
});
tombol5.addEventListener('click', () => {
konten1.style.display = 'none';
konten2.style.display = 'none';
konten3.style.display = 'none';
konten4.style.display = 'none';
konten5.style.display = 'block';
konten6.style.display = 'none';
});
tombol6.addEventListener('click', () => {
konten1.style.display = 'none';
konten2.style.display = 'none';
konten3.style.display = 'none';
konten4.style.display = 'none';
konten5.style.display = 'block';
konten6.style.display = 'block';
});

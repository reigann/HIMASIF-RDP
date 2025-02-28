@extends('layouts.app')

@section('content')
    <!-- Hero Section -->
    <div class="text-center bg-primary text-white py-5">
        <h1 class="animate__animated animate__fadeInDown">Selamat Datang di HIMASIF</h1>
        <p class="animate__animated animate__fadeInUp">Himpunan Mahasiswa Sistem Informasi</p>
    </div>

    <!-- Foto Galeri -->
    <div class="container my-5">
        <h2 class="text-center mb-4 animate__animated animate__fadeIn">Galeri Foto</h2>
        <div class="row">
            <div class="col-md-4 mb-4 animate__animated animate__fadeInLeft">
                <img src="{{ asset('images/photo1.jpg') }}" alt="Foto 1" class="img-fluid rounded shadow">
            </div>
            <div class="col-md-4 mb-4 animate__animated animate__fadeInUp">
                <img src="{{ asset('images/photo2.jpg') }}" alt="Foto 2" class="img-fluid rounded shadow">
            </div>
            <div class="col-md-4 mb-4 animate__animated animate__fadeInRight">
                <img src="{{ asset('images/photo3.jpg') }}" alt="Foto 3" class="img-fluid rounded shadow">
            </div>
        </div>
    </div>

    <!-- Deskripsi Singkat -->
    <div class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-4 animate__animated animate__fadeIn">Tentang HIMASIF</h2>
            <p class="text-center animate__animated animate__fadeIn">
                HIMASIF adalah Himpunan Mahasiswa Sistem Informasi yang bertujuan untuk memajukan dan mengembangkan potensi mahasiswa di bidang teknologi informasi.
            </p>
        </div>
    </div>
@endsection
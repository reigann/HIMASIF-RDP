@extends('layouts.app')

@section('content')
    <!-- Hero Section -->
    <section class="hero-section position-relative text-white overflow-hidden" style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); min-height: 90vh; display: flex; align-items: center; box-shadow: inset 0 0 50px rgba(0,0,0,0.3);">
        <div class="container text-center py-5">
            <h1 class="display-3 fw-bold animate__animated animate__zoomIn" style="text-shadow: 3px 3px 15px rgba(0,0,0,0.5); letter-spacing: 2px;">
                Selamat Datang di HIMASIF
            </h1>
            <p class="lead animate__animated animate__fadeInUp animate__delay-1s" style="font-size: 1.3rem; max-width: 700px; margin: 20px auto;">
                Himpunan Mahasiswa Sistem Informasi - Menginspirasi Inovasi, Membangun Masa Depan
            </p>
            <a href="#gallery" class="btn btn-outline-light btn-lg mt-4 animate__animated animate__bounceIn animate__delay-2s" style="border-radius: 50px; padding: 12px 40px; font-weight: 600; transition: all 0.3s ease;">
                Jelajahi Galeri
            </a>
        </div>
        <div class="position-absolute w-100 h-100 top-0 start-0" style="background: url('{{ asset('images/himasif.JPG') }}') no-repeat center/cover; opacity: 0.15;"></div>
    </section>

    <!-- Foto Galeri -->
    <section id="gallery" class="py-5 bg-white">
        <div class="container">
            <h2 class="text-center mb-5 fw-bold animate__animated animate__fadeIn" style="color: #2a5298; font-size: 2.5rem; letter-spacing: 1px;">
                Galeri Kegiatan
            </h2>
            <div class="row g-4">
                <div class="col-md-4 animate__animated animate__fadeInLeft">
                    <div class="gallery-card position-relative overflow-hidden rounded shadow-lg">
                        <img src="{{ asset('images/himasif.JPG') }}" alt="Foto 1" class="img-fluid transition-scale">
                        <div class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); opacity: 0; transition: opacity 0.4s ease;">
                            <h5 class="text-white mb-0 fw-bold">Kegiatan 1</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 animate__animated animate__fadeInUp">
                    <div class="gallery-card position-relative overflow-hidden rounded shadow-lg">
                        <img src="{{ asset('images/photo2.jpg') }}" alt="Foto 2" class="img-fluid transition-scale">
                        <div class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); opacity: 0; transition: opacity 0.4s ease;">
                            <h5 class="text-white mb-0 fw-bold">Kegiatan 2</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 animate__animated animate__fadeInRight">
                    <div class="gallery-card position-relative overflow-hidden rounded shadow-lg">
                        <img src="{{ asset('images/photo3.jpg') }}" alt="Foto 3" class="img-fluid transition-scale">
                        <div class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); opacity: 0; transition: opacity 0.4s ease;">
                            <h5 class="text-white mb-0 fw-bold">Kegiatan 3</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Deskripsi Singkat -->
    <section class="py-5" style="background: #f8f9fa;">
        <div class="container text-center">
            <h2 class="fw-bold mb-4 animate__animated animate__fadeIn" style="color: #1e3c72; font-size: 2.5rem; letter-spacing: 1px;">
                Tentang HIMASIF
            </h2>
            <p class="lead animate__animated animate__fadeIn animate__delay-1s" style="max-width: 900px; margin: 0 auto; font-size: 1.2rem; line-height: 1.8;">
                HIMASIF adalah komunitas mahasiswa Sistem Informasi yang berkomitmen untuk mengembangkan potensi melalui teknologi, inovasi, dan kolaborasi untuk menciptakan dampak positif bagi masyarakat.
            </p>
            <div class="mt-5">
                <a href="#more" class="btn btn-primary btn-lg animate__animated animate__fadeInUp animate__delay-2s" style="border-radius: 50px; padding: 12px 40px; background: #2a5298; border: none; transition: all 0.3s ease;">
                    Pelajari Lebih Lanjut
                </a>
            </div>
        </div>
    </section>

    <!-- Custom CSS -->
    <style>
        .transition-scale {
            transition: transform 0.4s ease;
        }
        .gallery-card:hover .transition-scale {
            transform: scale(1.08);
        }
        .gallery-card:hover .overlay {
            opacity: 1;
        }
        .hero-section {
            position: relative;
            z-index: 1;
        }
        .btn-outline-light:hover {
            background: #ffd700;
            color: #1e3c72;
            border-color: #ffd700;
        }
        .btn-primary:hover {
            background: #1e3c72;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
    </style>
@endsection
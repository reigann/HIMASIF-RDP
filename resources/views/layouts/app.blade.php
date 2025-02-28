<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HIMASIF - Himpunan Mahasiswa Sistem Informasi</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Animate.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <!-- Custom CSS -->
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Poppins', sans-serif; background-color: #f5f7fa; margin: 0; padding: 0;">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark shadow-lg fixed-top" style="background: linear-gradient(90deg, #1e3c72 0%, #2a5298 100%); z-index: 1000;">
        <div class="container">
            <a class="navbar-brand fw-bold d-flex align-items-center" href="/" style="font-size: 1.6rem; letter-spacing: 1px;">
                <img src="{{ asset('images/logohimasif.png') }}" alt="Logo HIMASIF" style="height: 45px; margin-right: 12px; transition: transform 0.3s ease;">
                HIMASIF
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link px-3 py-2 nav-link-custom" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3 py-2 nav-link-custom" href="/about">Tentang Kami</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3 py-2 nav-link-custom" href="/agenda">Agenda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3 py-2 nav-link-custom" href="/event">Event</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3 py-2 nav-link-custom" href="/contact">Kontak Kami</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Konten Utama -->
    <main style="padding-top: 80px;"> <!-- Memberi jarak agar konten tidak tertutup navbar -->
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="text-white py-5 mt-5 shadow-lg" style="background: linear-gradient(90deg, #1e3c72 0%, #2a5298 100%);">
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-center text-md-start mb-4">
                    <h5 class="fw-bold text-uppercase" style="letter-spacing: 1px;">HIMASIF</h5>
                    <p class="small">Himpunan Mahasiswa Sistem Informasi<br>Universitas XYZ</p>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <h5 class="fw-bold text-uppercase" style="letter-spacing: 1px;">Kontak Kami</h5>
                    <p class="small mb-1">Email: <a href="mailto:himasif@example.com" class="text-white text-decoration-none">himasif@example.com</a></p>
                    <p class="small mb-0">Instagram: <a href="https://instagram.com/himasif_official" class="text-white text-decoration-none">@himasif_official</a></p>
                </div>
                <div class="col-md-4 text-center text-md-end mb-4">
                    <h5 class="fw-bold text-uppercase" style="letter-spacing: 1px;">Lokasi</h5>
                    <p class="small">Fakultas Teknologi Informasi<br>Universitas XYZ, Jl. Teknologi No. 1</p>
                </div>
            </div>
            <hr class="bg-white opacity-25">
            <p class="text-center small mb-0">© {{ date('Y') }} HIMASIF. All rights reserved.</p>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="{{ asset('js/custom.js') }}"></script>

    <!-- Custom Inline CSS -->
    <style>
        .nav-link-custom {
            position: relative;
            color: #fff !important;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        .nav-link-custom:hover {
            color: #ffd700 !important;
            transform: translateY(-3px);
        }
        .nav-link-custom::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 50%;
            background: #ffd700;
            transition: all 0.3s ease;
        }
        .nav-link-custom:hover::after {
            width: 70%;
            left: 15%;
        }
        .navbar-brand:hover img {
            transform: rotate(20deg) scale(1.1);
        }
    </style>
</body>
</html>
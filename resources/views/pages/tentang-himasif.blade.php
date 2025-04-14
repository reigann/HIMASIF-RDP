@extends('layouts.app')

@section('title', 'Tentang HIMASIF - HIMASIF RDP')

@push('styles')
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    @vite(['resources/css/tentang-himasif.css'])
@endpush

@section('content')
@include('partials.navbar')

<div id="about-page">
    <!-- Landing Section -->
    <section id="landing-tentang-himasif" class="d-flex align-items-center justify-content-center position-relative overflow-hidden">
        <div class="background-container position-absolute top-0 start-0 w-100 h-100">
            <img src="/images/backgrounds/bg biru1.svg" class="w-100 h-100 object-fit-cover position-absolute" alt="Background">
        </div>
        <div class="landing-content container position-relative z-3 text-center">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h2 class="tentang-text animate-fade-in">tentang</h2>
                    <h1 class="himasif-text animate-fade-in-up">HIMASIF</h1>
                </div>
            </div>
        </div>
    </section>
</div>

@include('partials.footer')

@endsection

@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.js"></script>
    @vite(['resources/js/tentang-himasif.js'])
@endpush
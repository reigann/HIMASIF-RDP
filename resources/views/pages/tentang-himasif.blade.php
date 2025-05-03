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
    <section id="landing-tentang-himasif">
        <div class="landing-content">
            <div class="tentang-text">tentang</div>
            <div class="himasif-text">HIMASIF</div>
        </div>
    </section>
</div>

@include('partials.footer')

@endsection

@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    @vite(['resources/js/about.js'])
@endpush
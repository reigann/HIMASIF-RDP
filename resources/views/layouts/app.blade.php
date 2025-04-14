<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'HIMASIF RDP')</title>
    @vite(['resources/css/app.css', 'resources/css/loading.css'])
    @stack('styles')
</head>
<body class="overflow-x-hidden w-full">
    <main class="w-full overflow-x-hidden">
        @yield('content')
    </main>
    <!-- GSAP and Three.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

    @vite(['resources/js/loading.js'])
    @stack('scripts')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

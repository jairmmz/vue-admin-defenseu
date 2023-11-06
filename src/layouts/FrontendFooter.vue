<template>
    <footer class="bg-[#161C2A]">
        <div class="container mx-auto px-8">
            <div class="w-full flex flex-col md:flex-row py-6">
                <div class="flex-1 mb-6 text-black">
                    <ul>
                        <li>
                            <a class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                                href="#">Defensoría
                            </a>
                        </li>
                        <li class="no-underline text-white">Celular/Teléfono: 945950915</li>
                        <li class="no-underline text-white">Horario de atención: Lunes a Viernes de 07:30-13:00 y
                            14:00-15:30</li>
                        <li>
                            <a href="mailto:defensoriauniversitaria@unamba.edu.pe"
                                class="no-underline text-white hover:underline hover:text-orange-500">
                                defensoriauniversitaria@unamba.edu.pe
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="flex-1">
                    <p class="uppercase text-white md:mb-6">Enlaces</p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" class="no-underline text-white hover:underline hover:text-orange-500">Noticias</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#"
                                class="no-underline text-white hover:underline hover:text-orange-500">Procedimientos</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" class="no-underline text-white hover:underline hover:text-orange-500">Documentos</a>
                        </li>
                    </ul>
                </div>
                <div class="flex-1">
                    <p class="uppercase text-white md:mb-6">Defensoría Universitaria</p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" class="no-underline text-white hover:underline hover:text-orange-500">Ubicanos
                                en el
                                primer piso del pabellón de Ing. Informática y Sistemas.</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#">
                                <img src="../images/defensoría/channel-03.png" class="w-56" alt="UNAMBA">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr>
        <div class="text-center py-5 text-white">
            <span>
                Copyright © {{ year }}, Defensoría Universitaria - UNAMBA
            </span>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
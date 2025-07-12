import React from 'react';
import './App.css';

// Import gambar dari folder assets
import logo from './assets/logo.png';
import strukturOrganisasi from './assets/struktur-organisasi.png';

function App() {
  return (
    <div>
      {/* 1. Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#0a586a' }}>
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Logo MMD Gondang" width="30" height="30" className="d-inline-block align-top me-2" />
            Desa Gondang
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#profil">Profil Desa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#struktur">Struktur Desa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#peta">Peta Wilayah</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 2. Header/Hero Section */}
      <header id="home" className="text-white text-center">
        <div className="container d-flex align-items-center justify-content-center h-100">
            <div>
                <h1>Selamat Datang di Desa Gondang</h1>
                <p className="lead">Kecamatan Gandusari, Kabupaten Blitar</p>
            </div>
        </div>
      </header>
      
      <main>
        {/* 3. Profil Desa Section */}
        <section id="profil" className="py-5">
          <div className="container">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Profil Desa Gondang</h2>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3 className="fw-light">Gambaran Umum</h3>
                <p>Desa Gondang adalah sebuah Desa di Kecamatan Gandusari, Kabupaten Blitar, Provinsi Jawa Timur. Desa ini terdiri dari dua dusun yaitu Dusun Sanan dan Dusun Gondang. Luas wilayah Desa adalah 154.490 Ha, dengan 45.270 Ha merupakan pemukiman penduduk dan sisanya adalah lahan kering serta area persawahan. Wilayah Desa Gondang juga dilewati oleh sungai Sumber Jambe sepanjang 2 km.</p>
                <h3 className="fw-light mt-4">Letak Geografis</h3>
                <p>Secara geografis, Desa Gondang berada di posisi 7°21'-7°31' Lintang Selatan dan 110°10'-111°40' Bujur Timur, dengan topografi dataran tinggi sekitar 300 m di atas permukaan air laut. Batas wilayahnya adalah:</p>
                <ul>
                    <li><strong>Utara:</strong> Desa Kotes, Kecamatan Gandusari</li>
                    <li><strong>Selatan:</strong> Desa Kamulan, Kecamatan Talun</li>
                    <li><strong>Barat:</strong> Desa Sumberagung, Kecamatan Gandusari</li>
                    <li><strong>Timur:</strong> Desa Jajar, Kecamatan Talun</li>
                </ul>
              </div>
              <div className="col-lg-6">
                 <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card text-center h-100 shadow-sm">
                            <div className="card-body">
                                <i className="bi bi-people-fill fs-1 text-primary"></i>
                                <h5 className="card-title mt-2">Jumlah Penduduk</h5>
                                <p className="fs-3 fw-bold">1.602 Jiwa</p>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-6 mb-4">
                        <div className="card text-center h-100 shadow-sm">
                            <div className="card-body">
                                <i className="bi bi-house-door-fill fs-1 text-success"></i>
                                <h5 className="card-title mt-2">Jumlah Keluarga</h5>
                                <p className="fs-3 fw-bold">616 KK</p>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-6 mb-4">
                        <div className="card text-center h-100 shadow-sm">
                            <div className="card-body">
                                <i className="bi bi-geo-alt-fill fs-1 text-danger"></i>
                                <h5 className="card-title mt-2">Luas Wilayah</h5>
                                <p className="fs-3 fw-bold">154.49 Ha</p>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-6 mb-4">
                        <div className="card text-center h-100 shadow-sm">
                            <div className="card-body">
                                <i className="bi bi-signpost-split-fill fs-1 text-warning"></i>
                                <h5 className="card-title mt-2">Jumlah Dusun</h5>
                                <p className="fs-3 fw-bold">2 Dusun</p>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Struktur Pemerintahan Desa Section */}
        <section id="struktur" className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Struktur Organisasi Pemerintah Desa</h2>
              <p>Pemerintahan Desa Gondang, Kecamatan Gandusari, Kabupaten Blitar</p>
              <hr className="w-25 mx-auto" />
            </div>
            <div className="text-center">
              <img src={strukturOrganisasi} className="img-fluid rounded shadow" alt="Bagan Struktur Organisasi Desa Gondang" />
            </div>
             <div className="row mt-5 justify-content-center">
                <div className="col-md-3 text-center">
                    <h5>Slamet Shoni Harianto</h5>
                    <p className="text-muted">Kepala Desa</p>
                </div>
                 <div className="col-md-3 text-center">
                    <h5>Moch. Syaifudin Anwar</h5>
                    <p className="text-muted">Sekretaris Desa</p>
                </div>
                 <div className="col-md-3 text-center">
                    <h5>Eko Pujianto</h5>
                    <p className="text-muted">Seksi Pemerintahan</p>
                </div>
                 <div className="col-md-3 text-center">
                    <h5>Setya Budi</h5>
                    <p className="text-muted">Seksi Kesejahteraan dan Pelayanan</p>
                </div>
            </div>
          </div>
        </section>

        {/* 5. Peta Wilayah Section (Updated) */}
        <section id="peta" className="py-5">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Peta Interaktif Desa Gondang</h2>
                    <hr className="w-25 mx-auto" />
                    <p className="lead">Jelajahi detail wilayah, fasilitas, dan batas dusun Desa Gondang melalui peta interaktif kami.</p>
                </div>
                <div className="text-center">
                    {/* Icon untuk representasi visual */}
                    <i className="bi bi-map-fill" style={{ fontSize: '4rem', color: '#0a586a' }}></i>
                    
                    {/* Tombol yang mengarah ke Peta Interaktif Anda */}
                    <div className="d-grid gap-2 col-6 mx-auto mt-4">
                        <a 
                            href="https://g4l1le30.github.io/maps" 
                            className="btn btn-primary btn-lg shadow" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ backgroundColor: '#0a586a', borderColor: '#0a586a' }}>
                            <i className="bi bi-arrows-fullscreen me-2"></i> Buka Peta Interaktif
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* 6. Footer */}
      <footer className="py-4 text-white text-center" style={{ backgroundColor: '#0a586a' }}>
        <div className="container">
          <p className="mb-0">&copy; 2025 Pemerintah Desa Gondang, Blitar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
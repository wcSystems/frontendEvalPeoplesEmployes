<template>
  <div id="app">
    <div class="wrapper">
            <header class="main-header">
                <a href="../" class="logo">
                    <span class="logo-mini"><b>HDTI</b></span>
                    <span class="logo-lg"><b>Solicitud de Taxi </b></span>
                </a>
                <nav class="navbar navbar-static-top">
                    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span class="sr-only">Toggle navigation</span>
                    </a>
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <li class="dropdown user user-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <span class="fa fa-user"></span>
                                    <span class="hidden-xs"> nombre de usuario</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="user-header">
                                        <img src="<%= BASE_URL %>dist/img/Usuario-Vacio.png" class="img-circle" alt="User Image">
                                        <p>
                                            Nombre de usuario
                                        </p>
                                    </li>
                                    <li class="user-footer">
                                        <div class="pull-left">
                                        </div>
                                        <div class="pull-right">
                                            <a href="javascript:CerrarS()" class="btn btn-default btn-flat">Cerrar Sesion</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <aside class="main-sidebar">
                <section class="sidebar">
                    <ul class="sidebar-menu" id="menuc">
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-book"></i> <span>Evaluaciones</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-left"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li>
                                  <router-link to="/evaluar">Evaluar</router-link>
                                </li>
                                <li>
                                    <router-link to="/resultados">Resultados</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-book"></i> <span>Configuracion</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-left"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li>
                                  <router-link to="/user">Usuario</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
            <div class="content-wrapper">
                <section class="content">
                    <div class="row">
                        <div class="col-xs-12">
                            <router-view/>
                        </div>
                    </div>
                </section> 
            </div>
        </div>
  </div>
</template>
    

//ingresar variables id estudiante
var nombre = prompt("Ingresa nombre de estudiante:", "Juan");
var apellido = prompt("Ingresa apellido de estudiante:", "Pérez");
var carrera = prompt("Ingresa la carrera del de estudiante:", "Programación web");

//ingresar variables fila 1 y se transforma cada cadena numérica en float
var asignatura1 = prompt("Ingresa una asignatura de estudiante:", "HTML");
var nota1_1 = prompt("Ingresa la nota 1 de la asignatura "+ asignatura1, "5.0");
nota1_1 = parseFloat(nota1_1);
var nota2_1 = prompt("Ingresa la nota 2 de la asignatura "+ asignatura1, "5.0");
nota2_1 = parseFloat(nota2_1);
var nota3_1 = prompt("Ingresa la nota 3 de la asignatura "+ asignatura1, "5.0");
nota3_1 = parseFloat(nota3_1);
//promedio fila 1 y muestra dos decimales
eval(prom1 = (nota1_1 + nota2_1 + nota3_1)/3);
prom1 = prom1.toFixed(2);

//ingresar variables fila 2 y se transforma cada cadena numérica en float
var asignatura2 = prompt("Ingresa otra asignatura de estudiante:", "CSS");
var nota1_2 = prompt("Ingresa la nota 1 de la asignatura "+ asignatura2, "5.0");
nota1_2 = parseFloat(nota1_2);
var nota2_2 = prompt("Ingresa la nota 2 de la asignatura "+ asignatura2, "5.0");
nota2_2 = parseFloat(nota2_2);
var nota3_2 = prompt("Ingresa la nota 3 de la asignatura "+ asignatura2, "5.0");
nota3_2 = parseFloat(nota3_2);
//promedio fila 2 y muestra dos decimales
eval(prom2 = (nota1_2 + nota2_2 + nota3_2)/3);
prom2 = prom2.toFixed(2);

//ingresar variables fila 3 y se transforma cada cadena numérica en float
var asignatura3 = prompt("Ingresa otra asignatura de estudiante:", "JavaScript");
var nota1_3 = prompt("Ingresa la nota 1 de la asignatura "+ asignatura3, "5.0");
nota1_3 = parseFloat(nota1_3);
var nota2_3 = prompt("Ingresa la nota 2 de la asignatura "+ asignatura3, "5.0");
nota2_3 = parseFloat(nota2_3);
var nota3_3 = "-";
//promedio fila 
prom3 = "-";

/*//valor nota_prob en float
nota_prob = parseFloat(nota_prob);*/
nota4 = parseInt(12);
//Fórmula nota de aprobación
eval(nota_prob = (nota4 - nota1_3 - nota2_3))
nota_prob = nota_prob.toFixed(2);

//creando div contenedor header y su información
document.write("<header>");
document.write("<div class='container'>");
document.write("<h1>Notas finales</h1>");
document.write("<img src='assets/img/logo-academia.png' class='photo'>");
document.write("</div>");
document.write("</header>");

//creando div contenedor id estudiante
document.write("<div class='container'>");
//creando tabla Bootstrap id estudiante
document.write("<table class='estudiante'>");
//creando fila encabezado y datos
document.write("<thead>")
document.write("<tr>")
document.write("<th scope='col'>Nombre:</th>")
document.write("<td>"+nombre+" "+apellido+"</th>")
document.write("</tr>")
document.write("<th scope='col'>Carrera:</th>")
document.write("<td>"+carrera+"</th>")
document.write("</thead>")
document.write("</table>")
document.write("</div>");
document.write("<br>");
//cerrando div contendor
document.write("</div>");

//creando div contenedor notas
document.write("<div class='container'>");
//creando tabla Bootstrap notas
document.write("<table class='table'>");
//creando fila encabezado y datos
document.write("<thead class='bg-dark text-white'>")
document.write("<tr>")
document.write("<th scope='col'>Curso</th>")
document.write("<th scope='col'>Nota 1</th>")
document.write("<th scope='col'>Nota 2</th>")
document.write("<th scope='col'>Nota 3</th>")
document.write("<th scope='col'>Promedio</th>")
document.write("</tr>")
document.write("</thead>")
//creando fila de datos 1
document.write("<tbody>")
document.write("<tr>")
document.write("<td>"+asignatura1+"</td>")
document.write("<td>"+nota1_1+"</td>")
document.write("<td>"+nota2_1+"</td>")
document.write("<td>"+nota3_1+"</td>")
document.write("<td>"+prom1+"</td>")
document.write("</tr>")
document.write("</tbody>")
//creando fila de datos 2
document.write("<tbody>")
document.write("<tr>")
document.write("<td>"+asignatura2+"</td>")
document.write("<td>"+nota1_2+"</td>")
document.write("<td>"+nota2_2+"</td>")
document.write("<td>"+nota3_2+"</td>")
document.write("<td>"+prom2+"</td>")
document.write("</tr>")
document.write("</tbody>")
//creando fila de datos 3
document.write("<tbody>")
document.write("<tr>")
document.write("<td>"+asignatura3+"</td>")
document.write("<td>"+nota1_3+"</td>")
document.write("<td>"+nota2_3+"</td>")
document.write("<td>"+nota3_3+"</td>")
document.write("<td>"+prom3+"</td>")
document.write("</tr>")
document.write("</tbody>")
//cerrando tabla
document.write("</table>");
//Creando texto aprobación
document.write("Para aprobar el ramo "+asignatura3+" con promedio 4, necesitas obtener un "+nota_prob+" en la nota 3.")
//cerrando div contendor
document.write("</div>");
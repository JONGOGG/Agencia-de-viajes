import Testimonial from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    // Validaciones básicas
    if (!nombre || nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacío' });
    }
    if (!correo || correo.trim() === '') {
        errores.push({ mensaje: 'El correo está vacío' });
    }
    if (!mensaje || mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje está vacío' });
    }

    try {
        // Si hay errores, vuelve a renderizar la vista con los datos y errores
        if (errores.length > 0) {
            const testimoniales = await Testimonial.findAll({ limit: 10 }); // opcional: limitar
            return res.render('testimoniales', {
                pagina: 'Testimoniales',
                errores,
                nombre,
                correo,
                mensaje,
                testimoniales
            });
        }

        // Guardar en la base de datos
        await Testimonial.create({
            nombre,
            correo,
            mensaje
        });

        // Redirigir al listado de testimoniales
        res.redirect('/testimoniales');

    } catch (error) {
        console.error('Error al guardar el testimonial:', error);

        // Renderizar la vista con un mensaje de error
        const testimoniales = await Testimonial.findAll({ limit: 10 });
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores: [{ mensaje: 'Hubo un error al guardar el testimonial. Intenta de nuevo.' }],
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }
};

export {
    guardarTestimonial
};

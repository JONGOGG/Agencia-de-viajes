import Testimonial from '../models/testimoniales.js'

const guardarTestimonial = async (req, res) => {

    const { nombre, correo, mensaje } = req.body
    const errores = []

    if (!nombre || nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacío' })
    }

    if (!correo || correo.trim() === '') {
        errores.push({ mensaje: 'El correo está vacío' })
    }

    if (!mensaje || mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje está vacío' })
    }

    // Si hay errores
    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll();
        return res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }

    // Guardar en la BD
    try {
        await Testimonial.create({
            nombre,
            correo,
            mensaje
        })

       
        res.redirect('/testimoniales');

    } catch (error) {
        console.log(error)

    }
}

export {
    guardarTestimonial
}

function rotate(vtx, roll, azimuth, elevation) {
    let cosa = Math.cos(roll);
    let sina = Math.sin(roll);

    let cosb = Math.cos(azimuth);
    let sinb = Math.sin(azimuth);

    let cosc = Math.cos(elevation);
    let sinc = Math.sin(elevation);

    let Axx = cosa*cosb;
    let Axy = cosa*sinb*sinc - sina*cosc;
    let Axz = cosa*sinb*cosc + sina*sinc;

    let Ayx = sina*cosb;
    let Ayy = sina*sinb*sinc + cosa*cosc;
    let Ayz = sina*sinb*cosc - cosa*sinc;

    let Azx = -sinb;
    let Azy = cosb*sinc;
    let Azz = cosb*cosc;

    var r = new Vertex(0, 0, 0, vtx.id);
    r.x = Axx*vtx.x + Axy*vtx.y + Axz*vtx.z;
    r.y = Ayx*vtx.x + Ayy*vtx.y + Ayz*vtx.z;
    r.z = Azx*vtx.x + Azy*vtx.y + Azz*vtx.z;
    return r;
}

function orbit(offset, roll, azimuth, elevation) {
    return vtx => {
        let r0 = new Vertex(vtx.x - offset.x, vtx.y - offset.y, vtx.z - offset.z)
        r0 = rotate(r0, roll, azimuth, elevation)
        r0.x += offset.x
        r0.y += offset.y
        r0.z += offset.z
        return r0
    }
}

function deg2rad(deg) {
    return deg * Math.PI/180;
}

function swap2(a2) {
    return [a2[1], a2[0], a2[2]]
}
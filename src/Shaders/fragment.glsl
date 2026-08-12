varying vec3 vNormal;
varying vec3 vFragPos;
uniform vec3 cameraPos;
uniform sampler2D shadowMap;
varying vec4 lightPosition;

void main() {
    vec3 normal = normalize(vNormal);
    // gl_FragColor = vec4(vec3(7., 0., 0.0) * norm, 1.0);

    // vec3 lightDir = normalize(uLightPos - vFragPos);
    vec3 lightDir = vec3(0, 0, 1);


    vec3 color = vec3(.94, .78, .0);
    vec3 ambientColor = vec3(.23, .1, .00);
    vec3 fresnelColor = vec3(0.27, 0.25, 0.25);
    
    // vec3 diffuse = max(dot(normal, lightDir), 0.2) * color;

    // vec3 lighting = mix(ambientColor, color, dot(normal, lightDir));

    // Lighting
    float lightValue = dot(lightDir, normal);
    lightValue = (lightValue + 1.) / 2.;
    vec3 lighting = mix(ambientColor, color, lightValue)/1.1;
    float cameraAlignment = dot(normalize(cameraPos - vFragPos), normal);
    vec3 fresnel = (1. - cameraAlignment)/2. * fresnelColor;
    lighting = clamp(lighting - fresnel, 0., 1.);

    // Shadows
    vec2 shadowUV = lightPosition.xy * 0.5 + 0.5;
    float currentDepth = lightPosition.z * 0.5 + 0.5;
    float shadow = 0.0;
    for(int i=-2; i<=2; i++)
    {
        for(int j=-2; j<=2; j++)
        {
            vec2 offset = vec2(i,j) * 4. / 2048.;
            float depth = texture2D(shadowMap, shadowUV + offset).r;
            float difference = currentDepth - depth;
            shadow += smoothstep(0.002, 0.02, difference);
        }
    }

    shadow /= 25.0;

    vec3 finalColor = mix(
        lighting * 1.1,
        lighting * color / 1.1,
        shadow
    );

    gl_FragColor = vec4(finalColor, 1.0);

}
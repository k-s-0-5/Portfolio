varying vec3 vNormal;
varying vec3 vFragPos;
uniform mat4 lightView;
uniform mat4 lightProjection;
varying vec4 lightPosition;

#include <skinning_pars_vertex>
void main() {
    vec3 objectNormal = vec3(normal);
    vec3 transformed = vec3(position);

    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <skinning_vertex>

    vNormal = normalize(mat3(modelMatrix) * objectNormal);
    
    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    vFragPos = worldPosition.xyz;

    lightPosition = lightProjection * lightView * worldPosition;

    gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
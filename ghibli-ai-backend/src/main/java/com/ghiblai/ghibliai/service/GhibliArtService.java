package com.ghiblai.ghibliai.service;

import com.ghiblai.ghibliai.client.StabilityAIClient;
import com.ghiblai.ghibliai.dto.TextToImageRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class GhibliArtService {

    private final StabilityAIClient stabilityAIClient;
    private final String apikey;

    public GhibliArtService(StabilityAIClient stabilityAIClient,
                            @Value("${stability.api.key}") String apikey) {
        this.stabilityAIClient = stabilityAIClient;
        this.apikey = apikey;
    }

    public byte[] createGhibliArt(MultipartFile image, String prompt) {
        String finalPrompt = prompt + ", in the beautiful detailed anime style of Studio Ghibli";
        String engineId = "stable-diffusion-v1-6";
        String stylePreset = "anime";

        return stabilityAIClient.generateImageFromImage(
                "Bearer " + apikey,
                engineId,
                image,
                finalPrompt,
                stylePreset,
                7.0,   // cfg_scale
                1,     // samples
                30     // steps
        );
    }

    public byte[] createGhibliArtFromText(String prompt, String style) {
        String finalPrompt = prompt + ", in the beautiful detailed anime style of Studio Ghibli";
        String engineId = "stable-diffusion-v1-6";
        String stylePreset = style.equalsIgnoreCase("general") ? "anime" : style.replace("_", "-");

        TextToImageRequest requestPayload = new TextToImageRequest(finalPrompt, stylePreset);

        return stabilityAIClient.generateImageFromText(
                "Bearer " + apikey,
                engineId,
                requestPayload
        );
    }
}
